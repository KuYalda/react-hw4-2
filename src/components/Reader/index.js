import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';
import article from '../../db/publications.json';
import s from './Reader.module.css';

const Reader = () => {
  const { search } = useLocation();
  const history = useHistory();
  const { length } = article;
  let page = Number(new URLSearchParams(search).get('page'));

  const handleClickPrev = () => {
    page -= 1;
    history.push(`/reader?page=${page}`);
  };

  const handleClickNext = () => {
    page += 1;
    history.push(`/reader?page=${page}`);
  };

  useEffect(() => {
    if (!page || page > length || page < 1) {
      history.push('/reader?page=1');
    }
  });

  return page && page <= length ? (
    <div className={s.reader}>
      <section className={s.controls}>
        <Controls
          handleClick={handleClickPrev}
          className={s.button}
          stop={page - 1 === 0}
          value="Назад"
        />
        <Controls
          handleClick={handleClickNext}
          className={s.button}
          stop={length === page}
          value="Вперед"
        />
      </section>
      <Counter actualValue={page} maxValue={length} />
      <article className={s.publication} key={article.id}>
        <Publication
          text={article[page - 1].title}
          article={article[page - 1].text}
        />
      </article>
    </div>
  ) : (
    <h1>Ooops!</h1>
  );
};

export default Reader;
