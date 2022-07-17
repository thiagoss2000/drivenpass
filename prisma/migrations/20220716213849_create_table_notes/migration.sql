/*
  Warnings:

  - Added the required column `deleted_at` to the `Sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `Sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sessions" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserCredential" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "credentialId" INTEGER NOT NULL,

    CONSTRAINT "UserCredential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "note" TEXT NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNotes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "noteId" INTEGER NOT NULL,

    CONSTRAINT "UserNotes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserCredential" ADD CONSTRAINT "UserCredential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCredential" ADD CONSTRAINT "UserCredential_credentialId_fkey" FOREIGN KEY ("credentialId") REFERENCES "Credentials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotes" ADD CONSTRAINT "UserNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotes" ADD CONSTRAINT "UserNotes_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Notes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
