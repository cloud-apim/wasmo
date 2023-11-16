"use client"

import Layout from '@/components/Layout';
import Page from './_page.mdx';

export default function Home() {

  return <Layout
    metadata={{
      href: '/builder/your-first-plugin'
    }}
    previous={{
      href: "/builder/overview",
      title: "Builder - Overview"
    }}
    next={{
      href: "/builder/plugin-structure",
      title: "Plugin Structure"
    }}>
    <Page />
  </Layout>

}