import { useRouter } from "next/router";

import Head from "next/head";

export default function Car({ car }) {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>
      <h1>Car Details: {id}</h1>
      <img src={car.image} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);

  const res = await req.json();

  return {
    props: { car: res },
  };
}

export async function getStaticPaths() {
  const req = await fetch("http://localhost:3000/cars.json");
  const data = await req.json();

  const paths = data.map((car) => {
    return { params: { id: car } };
  });

  return {
    paths,
    fallback: false,
  };
}
