/*
  Warnings:

  - You are about to drop the `UserCards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserCredential` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserNotes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserWifi` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Wifi` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserCards" DROP CONSTRAINT "UserCards_cardId_fkey";

-- DropForeignKey
ALTER TABLE "UserCards" DROP CONSTRAINT "UserCards_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserCredential" DROP CONSTRAINT "UserCredential_credentialId_fkey";

-- DropForeignKey
ALTER TABLE "UserCredential" DROP CONSTRAINT "UserCredential_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserNotes" DROP CONSTRAINT "UserNotes_noteId_fkey";

-- DropForeignKey
ALTER TABLE "UserNotes" DROP CONSTRAINT "UserNotes_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserWifi" DROP CONSTRAINT "UserWifi_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserWifi" DROP CONSTRAINT "UserWifi_wifiId_fkey";

-- AlterTable
ALTER TABLE "Cards" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Credentials" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Wifi" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "UserCards";

-- DropTable
DROP TABLE "UserCredential";

-- DropTable
DROP TABLE "UserNotes";

-- DropTable
DROP TABLE "UserWifi";

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wifi" ADD CONSTRAINT "Wifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
