import { lusitana } from './fonts';


export default function AppLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">App Logo</p>
    </div>
  );
}