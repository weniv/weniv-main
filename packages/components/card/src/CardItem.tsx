import { CardProps } from './types';

import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';

import {
  articleStyle,
  contentWrap,
  dateStyle,
  imageStyle,
  teacherStyle,
  titleStyle,
  topStyle,
} from './style.css';

export const CardItem = ({ data }: { data: CardProps }) => {
  const { brand, image, title, description, teacher, date, platform } = data;

  return (
    <article className={articleStyle}>
      <div className={topStyle}>
        <p>
          {platform.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        <button type="button" onClick={() => alert('ddd')}>
          <Icon name="share" color="grayLv3" />
        </button>
      </div>
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
