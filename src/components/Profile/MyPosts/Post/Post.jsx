import classes from './Post.module.css'

const Post = (props) => {
  return <div className={classes.Post}>

    <div className={classes.item}>
      Alfem dimkov
    </div>
    <div className={classes.item}>


      <div className={classes.item}>
        <img src="https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480" alt="кот" />
      </div>
      {props.message}
      {props.age}

      <div>
        <span>like </span>
        {props.likeCount}

      </div>

    </div>
  </div>
}

export default Post;