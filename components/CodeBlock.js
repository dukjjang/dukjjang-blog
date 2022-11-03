import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target)
        alert('copied')
      } catch (err) {
        alert(`copy failed ${err}`)
      }
    }
  }
  return (
    <button
      onClick={handleCopy}
      className="absolute right-0 bg-white dark:bg-gray-500 dark:text-white rounded-lg px-2 pb-1 "
    >
      copy
    </button>
  )
}

export default function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers style={github}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
