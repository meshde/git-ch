cd ~/git-ch
git pull origin master
npm i
npm run build
bash build_images.sh
pm2 restart git-ch
