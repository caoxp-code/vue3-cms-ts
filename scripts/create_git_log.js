const conventional = require('conventional-changelog')
const fs = require('fs/promises')
const asyncfs = require('fs')
const path = require('path')

const exitLogDir = async function () {
  const dirLog = path.join(process.cwd(), 'changlog')
  await fs.stat(dirLog).catch(async (e) => {
    // 没有此文件夹，创建
    await fs.mkdir(dirLog).catch((ee) => console.log('mkdir-err:', ee))
  })
  return dirLog
}
function create() {
  // 创建changelog日志文件
  exitLogDir().then((dir) => {
    console.log('dir:', dir)
    // 根据当前日期创建文件
    const now = new Date()
    const time = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}`
    console.log('time:', time)
    const logPath = path.join(dir, `log_${time}.md`)
    console.log('path:', logPath)
    const writeStream = asyncfs.createWriteStream(logPath)
    conventional({ preset: 'angular' }).pipe(writeStream)
  })
}
create()
module.exports = {}
