-- CreateTable
CREATE TABLE "Wifi" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Wifi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWifi" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "wifiId" INTEGER NOT NULL,

    CONSTRAINT "UserWifi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserWifi" ADD CONSTRAINT "UserWifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWifi" ADD CONSTRAINT "UserWifi_wifiId_fkey" FOREIGN KEY ("wifiId") REFERENCES "Wifi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
