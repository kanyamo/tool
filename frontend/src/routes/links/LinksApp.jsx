import React from 'react'
import LinkList from './components/LinkList'
import { v4 as uuidv4 } from "uuid";

const LinksApp = () => {
  const links = [
    {
      name: "チャットアプリ",
      url: "https://chatapp.kanyamo.com",
      id: uuidv4(),
      description: "Djangoを使って試しに作ってみたアプリ。"
    },
    {
      name: "感覚の数学",
      url: "https://kanyamo.com",
      id: uuidv4(),
      description: "数学の解説をしているサイト。ブログのように動的に要素を追加できるようになっている。"
    },
    {
      name: "SPACE CAFE",
      url: "https://pages.kanyamo.com",
      id: uuidv4(),
      description: "単純なHTMLとCSSだけで作ってみたサイト。一番最初に作ったページ。"
    },
    {
      name: "Private Diary",
      url: "https://diary.kanyamo.com",
      id: uuidv4(),
      description: "あなただけのオンライン日記投稿サービス。"
    }
  ];

  return (
    <div>
      <h2>Links</h2>
      <p>私が作った他のサイトへのリンク集です。</p>
      <LinkList links={links}></LinkList>
    </div>
  )
}

export default LinksApp