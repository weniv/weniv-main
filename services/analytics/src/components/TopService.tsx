export default function TopService() {
  const style =
    'py-4 px-14 border-t border-slate-200 inline-flex w-full justify-between';

  return (
    <section>
      <h2 className="py-4 font-bold text-3xl">평균 접속자 Top5 Service</h2>
      <ol className="border-t border-b border-slate-400">
        <li className={`${style} border-t-0`}>
          위니북스
          <span>0,000</span>
        </li>
        <li className={style}>
          위니브 월드 <span>0,000</span>
        </li>
        <li className={style}>
          위니브 링크 <span>0,000</span>
        </li>
        <li className={style}>
          위니브 블로그 <span>0,000</span>
        </li>
        <li className={style}>
          스터디인
          <span>0,000</span>
        </li>
      </ol>
    </section>
  );
}
