// app function

const Main = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const NavbarComponet = ({ title }) => {
  const user = React.useContext(UserContext);
  const styles = {
    div: { marginTop: "20px" },
    h1: { color: "red" },
  };

  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>This is navbar {title}</h1>
      {user && <a href="/">Home</a>}
    </div>
  );
};

export default AppWrapper = () => {
  return (
    <UserContext.provider value={user}>
      <Main>
        <NavbarComponet title="title"></NavbarComponet>
        <FeaturePostComponent />
      </Main>
    </UserContext.provider>
  );
};

// abstract  posts to component on of its own

const FeaturePostComponent = ({ posts }) => {
  const user = React.useContext(UserContext);
  const posts = useFetchPosts();

  if (!user) return null;

  return <PostLayout posts={posts} />;
};

const PostLayout = ({ posts }) => {
  return (
    <>
      {posts.length ? (
        <ul>
          {posts.map((e) => (
            <li>
              {e.id} {e.title}
            </li>
          ))}
        </ul>
      ) : (
        <h1>"No posts found"</h1>
      )}
    </>
  );
};

const useFetchPosts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };
};

// create useFetchPosts component hook

// take posts from hook and add to featurePostComponent
