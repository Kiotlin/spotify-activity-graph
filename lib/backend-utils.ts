const fs = require("fs")
const path = require("path")

// appDir may be different at different device
const appDir = path.resolve(__dirname)

export async function writeToFile(content: any, path?: string) {
  const savePath = path ?? `${appDir}/test/api_data.txt`

  try {
    fs.writeFileSync(savePath, JSON.stringify(content), { flag: "a+" })
  } catch (error) {
    return { error: error }
  }
}
