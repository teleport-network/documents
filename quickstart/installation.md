<!--
order: 1
-->

# Installation

Install the Teleport binaries from [teleport releases](https://github.com/teleport-network/teleport-releases). {synopsis}

## Install Binaries

::: tip
The latest {{ $themeConfig.project.name }} [version](https://github.com/teleport-network/teleport-releases/tree/main/binary) is `{{ $themeConfig.project.binary }} {{ $themeConfig.project.latest_version }}`
:::

### GitHub

Download teleport in [teleport releases](https://github.com/teleport-network/teleport-releases/tree/main/binary/v0.1.0-alpha1) and move the `teleport` binary to `PATH`.

Linux example:

```bash
wget https://github.com/teleport-network/teleport-releases/blob/main/binary/v0.1.0-alpha1/teleport_0.1.0-alpha1_Linux_x86_64.tar.gz
tar zxf teleport_0.1.0-alpha1_Linux_x86_64.tar.gz
mv teleport_0.1.0-alpha1_Linux_x86_64/bin/teleport /bin/teleport
```

Check that the `{{ $themeConfig.project.binary }}` binaries have been successfully installed:

```bash
teleport version
```