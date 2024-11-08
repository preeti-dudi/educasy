// src/Pages/ArticlePage.js

import React from 'react';
import Article from '../Components/Articles/Article';
import ArticleCategory from '../Components/Articles/ArticleCategory';
import ArticleProgress from '../Components/Articles/ArticleProgress';
import RelatedArticles from '../Components/Articles/RelatedArticles';
import '../Styles/ArticleStyles.css';

const ArticlePage = () => {
  return (
    <div className="article-page">
      <section className="article-category">
        <ArticleCategory />
      </section>

      <section className="article-main">
        <Article />
      </section>

      <aside className="article-sidebar">
        <ArticleProgress />
        <RelatedArticles />
      </aside>
    </div>
  );
};

export default ArticlePage;
