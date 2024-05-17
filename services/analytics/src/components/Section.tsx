import styles from './Section.module.scss';
import { clsx } from 'clsx';

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx([styles.section, className])}>{children}</section>
  );
}
