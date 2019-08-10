![9p-over-ws](https://user-images.githubusercontent.com/5146707/62827130-626bb000-bbda-11e9-96bc-89b0052119be.png)

```
docker network create 9sandbox
$ ./run_alpha.sh
# in another tmux pane
$ ./run_beta.sh
; ndb/cs
; mkdir /alpha
; mount -A tcp!alpha!1800 /alpha
```
