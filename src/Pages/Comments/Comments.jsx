import React from "react";
import {useParams} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'

function Comments() {
  const navigate = useNavigate()
  const params = useParams()
  const [commits,
    setCommits] = React.useState()
  React.useEffect(() => {
    const handleComments = fetch(`https://jsonplaceholder.typicode.com/comments/`)
      .then(res => res.json())
      .then(data => setCommits(data))
  }, [])
  const postComments = commits
    ?.filter(commit => commit.postId == params.postId)
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="text-uppercase fst-italic fw-bold">Comments page:</h1>
        <Button onClick={() => navigate(-1)} variant="contained" type="button">{"< "}
          Back</Button>
      </div>
      <ul className="row">
        {postComments
          ?.length > 0 && postComments
            ?.map(Comment => (
              <li className="col-4 g-3" key={Comment.id}>
                <Card sx={{
                  minWidth: 275
                }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Title: {Comment.title}
                    </Typography>
                    <Typography
                      sx={{
                      mb: 1.5
                    }}
                      color="text.secondary">
                      Text: {Comment.body}
                    </Typography>
                  </CardContent>
                </Card>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default Comments;