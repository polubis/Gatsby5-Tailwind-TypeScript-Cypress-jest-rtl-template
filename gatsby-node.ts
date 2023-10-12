import { type GatsbyNode } from 'gatsby';
import { type ArticlesQuery } from './src/api/queries';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { errors, data } = await graphql<ArticlesQuery>(`
    query ArticlesQuery {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
          body
          id
        }
      }
    }
  `);

  if (!data) throw Error(`Data is undefined`);

  if (errors) {
    const error = Error(`Error loading MDX result`);
    reporter.panicOnBuild(error.message, errors);
    throw error;
  }

  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/article.template.tsx`),
      context: node,
    });
  });
};
