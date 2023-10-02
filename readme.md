### Mock server / Contract based development

Allows for decoupled front-end (FE) / back-end (BE) development.

#### Advantages

- Cuts complexity in half
- Much easier to reproduce bug or track root cause.
  - Replaying HAR recording
  - Discover contract breaches with schema validation.
- Supports hiring diverse profiles (junior FE dev / senior fullstack / ...)
- Supports async development: Starting/finishing one part before the other is started/done
- Supports parallel development: 1 dev working on FE and 1 dev working on BE without interfering eachother.
  - Less work-in-progress!
- Fast-2-run, easy-2-write UI tests
- FE obtains operating system independence. Can develop on Mac/Linux.

#### Disadvantages

- Might feel like a chore for fullstack devs.
  - Need to get used to API-test driven development instead of clicking around in the UI.

## To explain

- all the file-watching stuff
  - test watcher
  - server watching mocks
  - vite server HMR


## Why Radix/Shadcn
MUI too hard to customize. You __always__ have to do much more customization than you think.

Radix: headless components

Shadcn: Radix + Tailwind theme
![image](https://github.com/ThomasStock/mpv2/assets/8448483/53882c6a-9034-4ec7-87e2-1a4250d5aa4d)

## Tanstack Router

- A bit risky since it's in beta but has incredible DX to avoid bugs
- Have to keep an eye on this and leave a way out in case it dies

"Why not React Router?"
- We had an absolutely horrible experience upgrading React Router (ask Lyderic)
![image](https://github.com/ThomasStock/mpv2/assets/8448483/4e0f1f75-2002-40e7-8323-0dff5c0befc1)
