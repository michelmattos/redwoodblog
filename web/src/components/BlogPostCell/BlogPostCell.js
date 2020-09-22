import BlogPost from '../BlogPost/BlogPost'

export const QUERY = gql`
  query BlogPostQuery($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => {
  console.log(JSON.stringify(error, null, 2))
  return (
    <div>
      Error: {error.message}
      <ul>
        {error.networkError.result.errors.map((error, idx) => (
          <li key={idx}>{error.message}</li>
        ))}
      </ul>
    </div>
  )
}

export const Success = ({ post }) => {
  return <BlogPost post={post} />
}
