"use client"

import Layout from '../components/Layout';
import Page from './page.mdx';

export default function Home() {

  return <Layout next={{
    href: "/builder",
    title: "Builder"
  }}>
    <Page />
  </Layout>

}