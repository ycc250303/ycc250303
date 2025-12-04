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
  <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/ycc250303/ycc250303&title=Visitors&edge_flat=false" alt="visitors"/>
</div>

### 👨‍💻 About Me

<div>
<p> I’m currently studying Software Engineering at the School of Computer Science and Technology, Tongji University</p>
<p> How to reach me: 3516039373@qq.com</p>
</div>

### 📊 My GitHub

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=ycc250303&show_icons=true&count_private=true&rank_icon=github&line_height=27&custom_title=GitHub%20Stats&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&cache_seconds=1800" alt="GitHub Stats"/>
  
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ycc250303&layout=compact&hide=jupyter%20notebook&langs_count=20&cache_seconds=1800" alt="Top Languages"/>
</div>



---

`
console.log(readme)