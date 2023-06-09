import Image from 'next/image'
/**props 
 * 親から渡ってきたデータ 
 * 名称はなんでも良いが、慣例的にpropsを使う
 */
export function Headline(props) {
  // console.log(props);
  return (
    /**
     * コンポーネント化する時は必ず全体が一つのタグに囲まれていなければいけない
     * <div>で囲んでも良いが、Reactをimportして<React.Fragment>で囲むのが一般的
     * さらに<React.Fragment>は<></>で略せる
     * この場合はReactをimportする必要もなくなる
     * ただ、慣れるまでは<div>で囲む方がいいかも　　　　  
     */
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {/* コンポーネント1つ渡す時はpropsではなくchildrenで渡す */}
          {props.children}
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* 要素の後ろに空白を作りたい時は{" "}のように書く */}
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </>
  );
}
