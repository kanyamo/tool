import React, { useEffect, useState } from 'react';
import LinkList from './components/LinkList';
import AddLinkForm from './components/AddLinkForm';
import { ToolsLink } from './models/linkType';

const defaultLinks = [
  new ToolsLink({
    name: "チャットアプリ",
    url: "https://chatapp.kanyamo.com",
    description: "Djangoを使って試しに作ってみたアプリ。"
  }),
  new ToolsLink({
    name: "感覚の数学",
    url: "https://kanyamo.com",
    description: "数学の解説をしているサイト。ブログのように動的に要素を追加できるようになっている。"
  }),
  new ToolsLink({
    name: "SPACE CAFE",
    url: "https://pages.kanyamo.com",
    description: "単純なHTMLとCSSだけで作ってみたサイト。一番最初に作ったページ。"
  }),
  new ToolsLink({
    name: "Private Diary",
    url: "https://diary.kanyamo.com",
    description: "あなただけのオンライン日記投稿サービス。"
  })
];

const LinksApp : React.FC = () => {
  const [links, setLinks] = useState<ToolsLink[]>(defaultLinks);

  // 読み込み時にローカルストレージに保存されたリンクを読み込む
  useEffect(() => {
    const item = localStorage.getItem("links")
    // ストレージに保存されていない場合は、何もしない
    if (item == null) return;
    const storedLinks = JSON.parse(item).map((str : string) => ToolsLink.fromJson(str));
    setLinks(storedLinks);
  }, []);

  // linksが変更されるたびにローカルストレージを変更する
  useEffect(() => {
    const stringLinks = links.map((link) => link.toJson());
    localStorage.setItem("links", JSON.stringify(stringLinks));
  }, [links]);

  const addLink = (link: ToolsLink) => {
    setLinks((prevLinks) => {
      return [...prevLinks, link]
    });
  }

  return (
    <div>
      <h1>Links</h1>
      <LinkList links={links}></LinkList>
      <AddLinkForm addLink={addLink}></AddLinkForm>
      <h2>使い方</h2>
      <p>あなただけのリンク集です。新しいリンクのURLと名前を入力して「追加する」ボタンを押すと、新しいリンクを追加することができます。</p>
      <p>以下の機能は近日中に実装予定です。</p>
      <p>リンクを選択し、「選択中のリンクを開く」ボタンを押すとすべてのリンクを新しいタブで開くことができます。「選択したリンクの削除」を押すと、リンクを削除できます。</p>
    </div>
  )
}

export default LinksApp