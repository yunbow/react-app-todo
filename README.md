# To-Doリスト (TypeScript + React + Storybook)

React 18とTypeScript、Atomic Designパターンで構築されたタスク管理アプリケーションです。

## デモプレイ
https://yunbow.github.io/react-app-todo/demo/

## 主要機能

### タスク管理
- タスクの追加・編集・削除
- タスクの完了/未完了の切り替え
- タスクの永続化（localStorage）
- 作成日時順での並び替え

### フィルタリング
- **すべて**: 全タスクを表示
- **アクティブ**: 未完了タスクのみ表示
- **完了済み**: 完了タスクのみ表示

### 操作方法
- **Enterキー**: 新しいタスクを追加
- **チェックボックス**: タスクの完了状態を切り替え
- **削除ボタン**: タスクを削除
- **フィルタボタン**: 表示するタスクを絞り込み
- **完了済みをクリア**: 完了済みタスクを一括削除

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── todos/                  # TODOリスト機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── TaskForm/       # タスク入力フォーム
│       │   ├── TaskItem/       # 個別タスク項目
│       │   ├── FilterButtons/  # フィルタボタン群
│       │   └── TaskCounter/    # タスクカウンター
│       ├── TodoApp/            # TODO機能のルートコンポーネント
│       ├── useTasks.ts         # タスク管理カスタムフック
│       └── types.ts            # TODO機能の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # ボタン
│   ├── Input/                  # テキスト入力
│   └── Checkbox/               # チェックボックス
├── types/                      # 汎用的な型定義
├── stories/                    # Storybook用ストーリー
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License