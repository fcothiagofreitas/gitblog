import { useParams } from 'react-router-dom'

export function PostContent() {
  const namePost = useParams()
  return <h1>Conteudo do post</h1>
}
