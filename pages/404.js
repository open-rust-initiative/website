import Link from 'next/link'
import Layout from '../components/layout/Layout'
import FeaturedArticles from '../components/404/FeaturedArticles'
import { getFeaturedPosts } from '../libs/getPosts'
import { getAuthors } from '../libs/getAuthors'
import { ArrowSmRightIcon } from '@heroicons/react/solid'

export default function Custom404({featuredPosts, authors}) {
  return (
    <Layout metaTitle="Page not found">
      <section className="bg-gray-50">
        <div className="max-w-2xl min-h-screen px-4 py-12 mx-auto sm:px-6 lg:px-12 lg:max-w-screen-2xl lg:flex lg:items-center sm:pt-16 xl:py-20 ">
          
          {/* Page not found */}
          <div className="flex flex-col justify-center lg:w-1/2 xl:w-2/5">
            <div className="max-w-lg">
              <p href="#" className="relative text-sm tracking-widest text-red-800 uppercase">Opps!</p>
              <h2 className="mt-3 text-4xl font-medium tracking-normal text-gray-900 md:tracking-tight lg:leading-tight md:text-5xl">您搜索的文章不存在</h2>
              <div>
                <p className="mt-4 text-base leading-loose text-gray-600">
                  对不起，你要找的页面不存在。请尝试返回或访问另一个链接。
                </p>
              </div>
              <div className="inline-block">
                <Link href="/">
                  <a className="flex items-center mt-4 text-red-700 no-underline transition duration-300 ease-in-out sm:mt-5 hover:text-red-600 group">
                    返回首页
                    <ArrowSmRightIcon className="w-5 h-5 ml-2 transition duration-300 ease-in-out group-hover:text-red-700 group-hover:translate-x-1.5" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <FeaturedArticles posts={featuredPosts} authors={authors} />

        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      authors: getAuthors(),
      featuredPosts: getFeaturedPosts().slice(0,4)
    }
  }
}