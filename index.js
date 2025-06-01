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

const readme = `\
<h1>
  👋 Hi there my No.
  <img src='https://profile-counter.glitch.me/ycc250303/count.svg'/>
  visitor!
</h1>

> [!TIP]
> ⏳ Year Progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
>
> ⏰ Updated on ${new Date().toUTCString()}

<div align='center'>
  <img src='https://github-readme-stats.vercel.app/api?username=ycc250303&show_icons=true&count_private=true' height='190'/>
  <img src='https://github-readme-stats.vercel.app/api/top-langs/?username=ycc250303&layout=compact' height='190'/>
</div>
`

console.log(readme)