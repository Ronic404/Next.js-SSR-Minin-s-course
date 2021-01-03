import Router from 'next/router'

export default function About() {
  const linkClickHandler = () => {
    Router.push('/')
  }

  return (
    <>
      <h1>About page</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
    </>
  )
}