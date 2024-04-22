import ClientComp from './components/clientComp';

export default async function Mypage() {

  // const article = await fetch(ENDPOINT, {
  //   next: { revalidate: 10 }
  // }).then(res => res.json());
  return (
    <>
     
      <div>マイページ</div>
      <ClientComp />
    </>
  )
}