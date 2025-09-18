interface ArticleContentProps {
  content: string
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div
      className="prose prose-lg max-w-none prose-headings:text-charcoal prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-2xl prose-h2:font-bold prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-xl prose-h3:font-semibold prose-p:leading-relaxed prose-p:text-gray-700 prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-green-600 prose-blockquote:pl-4 prose-blockquote:italic prose-strong:text-gray-900 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-ul:my-4 prose-li:my-2 prose-img:rounded-lg prose-img:shadow-md"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
