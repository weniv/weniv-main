import { CardProps } from './types';

import '@weniv/components-button/style.css';
import { IconButton } from '@weniv/components-button';
import { handleClipBoard } from '@weniv/hooks-copy';
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
  const { brand, image, title, description, teacher, date, platform, link } =
    data;

  const copyLink = (url: string) => {
    handleClipBoard(url);
  };
  return (
    <article className={articleStyle}>
      <div className={topStyle}>
        <p>
          {platform.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
        {link && (
          <IconButton
            name="share"
            color="grayLv3"
            variant="icon"
            onClick={() => copyLink((link.inflearn || link.youtube) as string)}
            width="40"
          />
        )}
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
