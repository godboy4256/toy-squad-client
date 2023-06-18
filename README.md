# Toy - Squad

## 코드 포매터

코드 포맷 설정 파일입니다.  
3개의 파일 생성 바랍니다.

### .prettierrc

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

### .eslintrc.json

```json
{
  "extends": ["react-app", "react-app.jest", "prettier"]
}
```

### .prettierignore

```text
/node_modules
```
