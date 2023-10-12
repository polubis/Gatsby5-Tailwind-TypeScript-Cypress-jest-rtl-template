export interface Article {
  frontmatter: {
    title: string;
    slug: string;
  };
  body: string;
  id: string;
}

export interface ArticlesQuery {
  allMdx: {
    nodes: Article[];
  };
}
