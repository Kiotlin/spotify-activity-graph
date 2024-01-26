"use client"
import LastfmIcon from "@/components/ui/lastfm-icon"
import SpotifyIcon from "@/components/ui/spotify-icon"
import React from "react"
import Dropzone from "react-dropzone"
import { RiFolderUploadFill } from "react-icons/ri"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function GraphPage() {
  return (
    <div className="p-6 flex flex-col grow items-center justify-center">
      <div className="flex flex-col gap-14">
        <h1 className="text-6xl font-bold">Import your data from</h1>
        <div className="flex gap-4 justify-center">
          <Dialog>
            <DialogTrigger>
              <div className="group hover:bg-secondary flex gap-2 justify-center items-center">
                <div className="h-[125px] w-[150px] flex flex-col gap-2 rounded-md p-4 border-foreground border-2 justify-center items-center">
                  <SpotifyIcon className="w-[50px] h-[50px]" />
                  <p className="text-xs">Personal Data</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload file</DialogTitle>
                <DialogDescription>
                  Spotify streaming data can be a compressed file or a single
                  json file
                </DialogDescription>
              </DialogHeader>
              <Dropzone onDrop={(files) => console.log(files)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div
                      className="p-28 border-gray-200 border-2 border-dashed rounded-sm"
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <div className="flex gap-4 justify-center items-center">
                        <div>
                          <div className="bg-gray-200 rounded-full p-3">
                            <RiFolderUploadFill className="w-6 h-6 text-gray-500" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-md font-bold text-gray-500">
                            Drop anywhere to import
                          </p>
                          <p className="text-xs text-gray-400">
                            Or click to select files or folders
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </Dropzone>
            </DialogContent>
          </Dialog>
          <div className="flex gap-2 justify-center items-center">
            <div className="h-[125px] w-[150px] flex flex-col gap-2 rounded-md p-4 border-foreground border-2 justify-center items-center">
              <LastfmIcon className="w-[90px] h-[50px]" />
              <p className="text-xs">Last fm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
