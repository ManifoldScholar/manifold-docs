# Command Line Interface

Manifold includes a command line interface \(CLI\) that can be used to start and stop services, import texts, and to perform administrative tasks. There are low-level tasks defined in client/package.json, and there are numerous rake tasks defined for the Manifold's API. Manifold's global CLI provides a unified interface to client and server tasks.

### Getting Started with the CLI

Relative to the Manifold repository root, the CLI script is located at `./bin/manifold` \(and aliased at `./bin/m`\). Most developers on the Manifold team have included `./bin` to their `$PATH` environment variable, and simple execute the CLI by typing `m` from the project root.

To see a list of subcommands offered by the CLI, type `manifold --help`.

```
Manifold CLI Usage Help:
    m [OPTIONS] [SUBCOMMAND] [ARG] ...

Parameters:
    [SUBCOMMAND]                  subcommand (default: "start")
    [ARG] ...                     subcommand arguments

Subcommands:
    start, s                      Start services
    lint, l                       Lint code
    test, t                       Run tests
    check, c                      Lint and test prior to commiting

Options:
    -h, --help                    print help
```

To see the help screen for a given subcommand, type `manifold subcommand --help`. For example, typing `manifold start --help` returns the following:

```
Manifold CLI Usage Help:
    manifold start [OPTIONS]

Options:
    --noapi                       do not start API
    --noworker                    do not start background worker
    --noclockwork                 do not start clockwork
    --noclient                    do not start client
    -h, --help                    print help
```

The Manifold development team uses the CLI to start services, lint code, and run tests. Linting and testing can be limited to just the client application or the API application. 

To start all Manifold services \(API, Workers, Clockwork, and the Client\), just type `manifold start`. Or, for that matter, just type `manifold`, as starting services is the default subcommand.

