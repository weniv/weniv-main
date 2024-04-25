import { useState } from 'react';
import { infoStyle, liStyle } from './style.css';

import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';
import { clsx } from 'clsx';

export default function WenivInfo({ className }: { className?: string }) {
  const [info, setInfo] = useState(false);

  return (
    <div className={clsx([infoStyle, className])}>
      <button
        type="button"
        className={clsx(['info__btn', info ? 'on' : null])}
        onClick={() => {
          setInfo(!info);
        }}
      >
        (주)위니브 사업자 정보
        <Icon name="down" width={16} color="surface" className="icon" />
      </button>

      <ul className={clsx(['info__ul', info ? ' on' : null])}>
        <li className={liStyle}>(주)위니브</li>
        <li className={liStyle}>대표: 이호준</li>
        <li className={liStyle}>사업자 번호: 546-86-01737</li>
        <li className={liStyle}>정보통신업</li>
        <li>
          주소:{' '}
          <address>제주 제주시 첨단로 330 세미양빌딩 A동 1층 106호</address>
        </li>
      </ul>
    </div>
  );
}
