const fs = require('fs')
const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
  const progressBarCapacity = 30
  const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
  const progressBar = '▇'.repeat(passedProgressBarIndex) + '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
  return `[ ${progressBar} ]`
}

const readme = `<h1>👋 Hi there, I'm ycc250303!</h1>

> [!TIP]
> ⏳ Year Progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
>
> ⏰ Updated on ${new Date().toUTCString()}

<div align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=ycc250303.ycc250303" alt="Visitors"/>
</div>

### 👨‍💻 About Me

<div>
<p> I’m currently studying Software Engineering at the School of Computer Science and Technology, Tongji University</p>
<p> How to reach me: 3516039373@qq.com</p>
</div>

### 📊 My GitHub

<div align="center">
  <img src="https://github-readme-stats-phi-pied-71.vercel.app/api?username=ycc250303&show_icons=true&count_private=true&theme=radical&hide_border=false" height="192" alt="GitHub Stats"/>
  <img src="https://github-readme-stats-phi-pied-71.vercel.app/api/top-langs?username=ycc250303&layout=compact&theme=radical&hide_border=false&hide=jupyter%20notebook&langs_count=10" height="192" alt="Top Languages"/>
</div>
`
fs.writeFileSync('README.md', readme)
