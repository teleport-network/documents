# command to clone teleport repo
git clone https://github.com/teleport-network/teleport.git

# command to generate docs using protoc-gen-doc
buf protoc \
    -I "$(pwd)/teleport/proto" \
    -I "$(pwd)/teleport/third_party/proto" \
    --doc_out=./api \
    --doc_opt=./protodoc-markdown.tmpl,proto-docs.md \
    $(find "$(pwd)/teleport/proto" -maxdepth 5 -name '*.proto')

# move teleport repo
rm -fr teleport
