import React from 'react'
import { Card, FormField, Loader } from '../components';

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-neutral-focus text-[32px]">The Community Gallery</h1>
        <p className="mt-2 text-neutral text-[14px] max-w-[500px]">Dreams made real thrrough the power of DreamBots AI. Browse through a collection of imaginative and visually stunning images</p>
      </div>
    </section>
  )
}

export default Home