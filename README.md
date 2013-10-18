
How to share data between modules using helper
==============================================

It's a proof of concept how to have data between submodules.

Just look at the code, then install `process-dataset` module and run:
```bash
npm install
node app
```

It works!

How it works
------------

It uses a global variable `process` in `process-dataset` module so you can use in any submodule and access the same variables.

```bash
$ tree
.
`-- node_modules
    |-- process-dataset
    `-- submodule
        `-- node_modules
            `-- process-dataset
```

