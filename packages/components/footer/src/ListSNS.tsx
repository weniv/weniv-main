import { snsStyle } from './style.css';
import { clsx } from 'clsx';

// icon
import '@weniv/components-icons/style.css';
import { Icon, icons } from '@weniv/components-icons';

export default function ListSNS({
  color = 'grayLv3',
  className,
}: {
  color?: string;
  className?: string;
}) {
  const SNSList = [
    {
      name: 'home',
      href: '/',
    },
    {
      name: 'inflearn',
      href: 'https://www.inflearn.com/users/170213/@jejucoding',
    },
    {
      name: 'youtube',
      href: 'https://www.youtube.com/@jejucodingcamp',
    },
    {
      name: 'naver',
      href: 'https://blog.naver.com/paul-lab',
    },
    {
      name: 'instar',
      href: 'https://www.instagram.com/weniv_official/',
    },
  ];

  return (
    <ul className={clsx([snsStyle, className])}>
      {SNSList.map((sns, index) => (
        <li key={index}>
          <a
            href={sns.href}
            target={sns.href.includes('http') ? '_blank' : '_self'}
          >
            <Icon
              name={sns.name as keyof typeof icons.iconType}
              color={color}
              className="sns-icon"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
