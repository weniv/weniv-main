import { CardProps } from './types';

import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';

import {
  articleStyle,
  brandStyle,
  contentWrap,
  dateStyle,
  imageStyle,
  teacherStyle,
  titleStyle,
} from './style.css';

export const CardItem = ({ data }: { data: CardProps }) => {
  const { brand, image, title, description, teacher, date } = data;

  return (
    <article className={articleStyle}>
      <p className={brandStyle}>{brand}</p>
      <div className={imageStyle}>
        <img src={image} alt="" />
      </div>
      <div className={contentWrap}>
        <p className={titleStyle}>{title}</p>
        <p className={teacherStyle}>{teacher}</p>
        <p className={dateStyle}>{date}</p>
      </div>
    </article>
  );
};
