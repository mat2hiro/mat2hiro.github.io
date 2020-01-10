(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{218:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"ポイント"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ポイント"}},[t._v("#")]),t._v(" ポイント")]),t._v(" "),s("ul",[s("li",[t._v("pandocを用いてmarkdownを（tex経由の）pdfにコンパイルするdocker imageを作る\n"),s("ul",[s("li",[t._v("documentclassはltjsbookがいいな")]),t._v(" "),s("li",[t._v("自前のテンプレートを使って様々な体裁に対応")]),t._v(" "),s("li",[t._v("bibliographyファイルを用意すれば、参考文献も載せられる")])])]),t._v(" "),s("li",[t._v("上記imageを用いて、自動コンパイル+そのままgit pushするgithub actionsを作る")])]),t._v(" "),s("h2",{attrs:{id:"動機"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#動機"}},[t._v("#")]),t._v(" 動機")]),t._v(" "),s("p",[t._v("レポートや論文をmarkdownで書きたい。texで消耗もしないし、テキストファイルで書ければ差分管理も楽ちんなので。")]),t._v(" "),s("p",[t._v("ただし、markdownで書いたままの落書きでは人様に見せられないので、体裁を整えて然るべき拡張子のファイルにする必要がある。")]),t._v(" "),s("p",[t._v("pandocでmd->tex->pdfとコンパイルすることにした。"),s("br"),t._v("\nで、"),s("a",{attrs:{href:"https://github.com/Kumassy/docker-alpine-pandoc-ja",target:"_blank",rel:"noopener noreferrer"}},[t._v("これをやってくれるdocker image"),s("OutboundLink")],1),t._v("がある。（今回はbibliographyを載せたいので、このイメージをちょっといじるけどね）")]),t._v(" "),s("p",[t._v("実際使ってみたが"),s("br"),t._v("\nmd書く->pdfにコンパイル->git push"),s("br"),t._v("\n↑この工程のうち、毎回コンパイル挟むのが面倒になってきた。（すぐ面倒臭がる）")]),t._v(" "),s("p",[t._v("なのでpandocによるコンパイルをgit push後に自動でやってもらう事にした。←今回の本題")]),t._v(" "),s("h2",{attrs:{id:"pandocを乗っけたdocker-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pandocを乗っけたdocker-image"}},[t._v("#")]),t._v(" pandocを乗っけたdocker image")]),t._v(" "),s("p",[t._v("基本は以下の記事を読んでください。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://qiita.com/Kumassy/items/ffa752da5f7193c4929c",target:"_blank",rel:"noopener noreferrer"}},[t._v("まだまだ Word で消耗してるの？ 大学のレポートを Markdown で書こう （Docker 編）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("ただ、上記イメージにはbibliographyを挿入するのに必要なpandoc-citeprocが入っていなかったので、入れ直すついでにpandocのバージョンも上げた。")]),t._v(" "),s("details",[s("summary",[t._v("pandoc入れ直すDockerfile")]),t._v(" "),s("div",{staticClass:"language-Docker extra-class"},[s("pre",{pre:!0,attrs:{class:"language-docker"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" kumassy/alpine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pandoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ja\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /src\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" ./ /src\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" ls "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("la\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apk update && \\\n  apk upgrade && \\\n  apk add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache git\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" wget https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/jgm/pandoc/releases/download/2.9.1.1/pandoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2.9.1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("amd64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" tar xvfz pandoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2.9.1.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("amd64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" cp pandoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("2.9.1.1/bin/* /usr/local/bin/\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("r /usr/bin/pandoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("crossref \\\n  && wget https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/lierdakil/pandoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("crossref/releases/download/v0.3.6.1a/linux"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pandoc_2_9_1.tar.gz "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("q "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("O "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" tar xz \\\n  && mv pandoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("crossref /usr/bin/\n")])])])]),t._v(" "),s("p",[t._v("これをbuildして、")]),t._v(" "),s("div",{staticClass:"language-shell-session extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell-session"}},[s("code",[s("span",{pre:!0,attrs:{class:"token output"}},[t._v("# イメージ名my-pandoc-jaとしてビルド\n")]),s("span",{pre:!0,attrs:{class:"token command"}},[s("span",{pre:!0,attrs:{class:"token sh important"}},[t._v("$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t._v("docker build ./ -t my-pandoc-ja")])]),t._v("\n")])])]),s("p",[t._v("こんな感じで使うとコンパイルできる。")]),t._v(" "),s("div",{staticClass:"language-shell-session extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell-session"}},[s("code",[s("span",{pre:!0,attrs:{class:"token output"}},[t._v("# input.mdにreferences.bibを付け足してoutput.pdfに書き出す\n")]),s("span",{pre:!0,attrs:{class:"token command"}},[s("span",{pre:!0,attrs:{class:"token sh important"}},[t._v("$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t._v("docker run -it --rm -v "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(":/src my-pandoc-ja pandoc -F pandoc-crossref input.md -o output.pdf --pdf-engine"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lualatex --template mytemplate.tex -N --top-level-division"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("chapter  --bibliography"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("references.bib")])]),t._v("\n")])])]),s("p",[t._v("テンプレートは自前のものを用意するか、以下のようにデフォルトのテンプレートを吐き出して使うかする。")]),t._v(" "),s("div",{staticClass:"language-shell-session extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell-session"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command"}},[s("span",{pre:!0,attrs:{class:"token sh important"}},[t._v("$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token bash language-bash"}},[t._v("docker run -it --rm -v "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(":/src my-pandoc-ja pandoc -D latex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mytemplate.tex")])]),t._v("\n")])])]),s("p",[t._v("おそらく目次以前のページに関するレイアウトをいじることになると思う。（表紙とか概要とか）"),s("br"),t._v("\n自分は標準テンプレートのmaketitle部分をいじって、表紙にいろんな情報を載せられるようにした。")]),t._v(" "),s("h2",{attrs:{id:"github-actionsで自動コンパイル"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-actionsで自動コンパイル"}},[t._v("#")]),t._v(" github actionsで自動コンパイル")]),t._v(" "),s("p",[t._v("基本は以下リンクを参照。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/configuring-a-workflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("ワークフローを設定する - GitHub ヘルプ"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("pushされたらworkflowを起動させたいので、"),s("code",[t._v("on: push")]),t._v(" を指定。")]),t._v(" "),s("h3",{attrs:{id:"自前imageつかってコンパイルする"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自前imageつかってコンパイルする"}},[t._v("#")]),t._v(" 自前imageつかってコンパイルする")]),t._v(" "),s("p",[t._v("各stepの"),s("code",[t._v("uses")]),t._v("メンバにDockerfileが置いてあるディレクトリを指定することで、そのDockerfileをもとにしたイメージをビルドする。")]),t._v(" "),s("p",[s("code",[t._v("with.args")]),t._v("はビルドしたイメージでrunしたいコマンドを指定する。")]),t._v(" "),s("p",[t._v("今回の場合は上記イメージにpandocによるコンパイルを任せたいので、")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pdf compile\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./path/to/image/\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pandoc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("F pandoc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("crossref input.md "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("o output.pdf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pdf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("engine=lualatex "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("template mytemplate.tex "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("N "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("level"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("division=chapter  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bibliography=references.bib\n")])])]),s("p",[t._v("こんな感じになる。")]),t._v(" "),s("h3",{attrs:{id:"コンパイル結果をgit-pushする"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#コンパイル結果をgit-pushする"}},[t._v("#")]),t._v(" コンパイル結果をgit pushする")]),t._v(" "),s("p",[t._v("このままではただコンパイルしただけになってしまうので、結果をどこかに上げるなりしないといけない。")]),t._v(" "),s("p",[t._v("今回はそのままgit pushすることにした。"),s("br"),t._v("\n（gitに無闇にバイナリを乗せるのもどうかと思うので、多分クラウドストレージにアップロードするなりした方がいい。）")]),t._v(" "),s("details",[s("summary",[t._v("gitにログインして変更をpushするコマンド")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitユーザー設定")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-git-username"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-git-email"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追跡")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin https://your-git-username:"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_TOKEN}")]),t._v("@github.com/your-repository.git\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  なんやかんややる")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[updater] update.'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin HEAD\n")])])])]),t._v(" "),s("h3",{attrs:{id:"２つをまとめる"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#２つをまとめる"}},[t._v("#")]),t._v(" ２つをまとめる")]),t._v(" "),s("p",[t._v("まとめて以下のようなshを作った。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitユーザー設定")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set git config."')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-git-username"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your-git-email"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追跡")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin https://your-git-username:"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GITHUB_TOKEN}")]),t._v("@github.com/your-repository.git\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pandocでpdfコンパイル")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build pdf."')]),t._v("\npandoc -F pandoc-crossref input.md -o output.pdf --pdf-engine"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("lualatex --template mytemplate.tex -N --top-level-division"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("chapter -B abstract.tex --bibliography"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("references.bib\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git push."')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" output.tex\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[updater] update pdf.'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin HEAD\n")])])]),s("p",[t._v("やっていることは、")]),t._v(" "),s("ol",[s("li",[t._v("gitにログイン")]),t._v(" "),s("li",[t._v("git追跡開始")]),t._v(" "),s("li",[t._v("pdfコンパイル")]),t._v(" "),s("li",[t._v("コンパイル結果のcommit, push")])]),t._v(" "),s("p",[t._v("該当stepの"),s("code",[t._v("with.args")]),t._v("に、このshを実行するようにコマンドを渡せばok.")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git update step\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./.github/images/\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sh ./lib/update.sh\n")])])]),s("h3",{attrs:{id:"環境変数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#環境変数"}},[t._v("#")]),t._v(" 環境変数")]),t._v(" "),s("p",[t._v("出力結果などのファイル名を変えるのが面倒なので、"),s("code",[t._v("env")]),t._v("メンバに然るべき環境変数を置くことで出力ファイル名などの管理を簡単にする。")]),t._v(" "),s("h2",{attrs:{id:"できた"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#できた"}},[t._v("#")]),t._v(" できた")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/mat2hiro/write-report-with-markdown",target:"_blank",rel:"noopener noreferrer"}},[t._v("このリポジトリ"),s("OutboundLink")],1),t._v("に完成版があります。")]),t._v(" "),s("p",[t._v("各人のリポジトリで試してみてください。"),s("br"),t._v("\npushしたら勝手に後追いでコンパイルしたpdfがpushされるはずです。")]),t._v(" "),s("h2",{attrs:{id:"future-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#future-works"}},[t._v("#")]),t._v(" future works")]),t._v(" "),s("p",[t._v("コンパイル結果をgitにpushするのではなく、適当なクラウドストレージにアップロードしたい。google driveでいいかな")]),t._v(" "),s("p",[t._v("また、workflow自体はイメージを毎回ビルドするので遅い。早くするには")]),t._v(" "),s("ul",[s("li",[t._v("イメージを軽くしてパッケージレポジトリに上げる（多分texのみ入っているalpineイメージでも事足りるはず）")]),t._v(" "),s("li",[t._v("キャッシュを使う（イメージのキャッシュってどうすればいいんだろう）")])]),t._v(" "),s("p",[t._v("といいと思います（投げやり）")]),t._v(" "),s("p",[t._v("遅いなら遅いで、コンパイルできたら通知するようにしてもいいかも\n（slack連携なら秒でできるはず）")])])}),[],!1,null,null,null);a.default=e.exports}}]);