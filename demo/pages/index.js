import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Grid, Row, Spacer } from '@nextui-org/react'
import CollapsableCard from './CollapsableCard'

import * as React from 'react';


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://reactjs.org/">React.js</a> Demo
        </h1>
        <h2 className={styles.subtitle}>
          Based on <a href="https://nextjs.org">Next.js!</a>
        </h2>

        <Spacer />

        <Grid.Container justify="center">
          <Grid>
            <Row>
              <CollapsableCard
                title="React uses JSX Files"
                subtitle="Easily embed HTML into react"
                src="images/Card1.PNG"
                avatar="images/jsx.png"
              />

              <Spacer />

              <CollapsableCard
                title="React is Component Based"
                subtitle="Create custom components and use them anywhere"
                src="images/Card2.PNG"
                avatar="images/React-components.jpg"
              />
            </Row>
          </Grid>
        </Grid.Container>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>

      </main>
    </div>
  )
}
