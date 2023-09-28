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
