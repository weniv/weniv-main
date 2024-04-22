import { snsStyle } from './style.css';

// icon
import '@weniv/components-icons/style.css';
import { Icon } from '@weniv/components-icons';

export default function ListSNS({
  color = 'grayLv3',
  className,
}: {
  color?: string;
  className?: string;
}) {
  const SNSList = [
    {
      icon: 'home',
      href: '/',
    },
    {
      icon: 'inflearn',
      href: 'https://www.inflearn.com/users/170213/@jejucoding',
    },
    {
      icon: 'youtube',
      href: 'https://www.youtube.com/@jejucodingcamp',
    },
    {
      icon: 'naver',
      href: 'https://blog.naver.com/paul-lab',
    },
    {
      icon: 'instar',
      href: 'https://www.instagram.com/weniv_official/',
    },
  ];

  return (
    <ul className={`${snsStyle} ${className}`}>
      {SNSList.map((sns, index) => (
        <li key={index}>
          <a
            href={sns.href}
            target={sns.href.includes('http') ? '_blank' : '_self'}
          >
            <Icon name={sns.icon} color={color} className="sns-icon" />
          </a>
        </li>
      ))}
    </ul>
  );
}
