import React from 'react'
import { Helmet } from 'react-helmet'

export const Header: React.FC = () => (
  <Helmet>
    <meta charSet='utf-8' />
    <title>Game of Thrones Perficient</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
  </Helmet>
)
