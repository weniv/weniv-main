import DoughnutChart from './DoughnutChart';

import styles from './DoughnutSections.module.scss';
import Section from './Section';

export default function DoughnutSections({ data }: { data: any }) {
  const { Device, OS, Browser } = data;
  return (
    <div className={styles.wrap}>
      <Section>
        <h3>모바일/PC</h3>
        <DoughnutChart data={Device} />
      </Section>
      <Section>
        <h3>운영체제</h3>
        <DoughnutChart data={OS} />
      </Section>
      <Section>
        <h3>브라우저</h3>
        <DoughnutChart data={Browser} />
      </Section>
    </div>
  );
}
